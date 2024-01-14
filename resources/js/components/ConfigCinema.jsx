import React, {useEffect, useState} from "react";
import useOpenHeader from "@/hooks/useOpenHeader.js";
import useFetching from "@/hooks/useFetching.js";

const typeSeat = {
    standart: 'conf-step__chair_standart',
    vip: 'conf-step__chair_vip',
    disabled: 'conf-step__chair_disabled',
}

const statuses = ['disabled', 'standart', 'vip'];
const ConfigCinema = ({cinemas, setCinemas}) => {
    const [changeOpen, classHeader] = useOpenHeader();
    const [checkedCinema, setCheckedCinema] = useState({});
    const [seats, setSeats] = useState([]);
    const [rowsAndSeats, setRowsAndSeats] = useState({
        numberOfRows: 0,
        numberOfSeat: 0,
    });

    const initSeats = async () => {
        const response = await fetch(`/api/seats/${checkedCinema.id}`);
        if (!response.ok) throw new Error('Error fetching');
        const result = await response.json();
        if (!result.length)
            return setSeats([]);

        const arr = [];
        for (const seat of result) {
            if (!arr[seat.row - 1])
                arr[seat.row - 1] = [];
            arr[seat.row - 1][seat.seat - 1] = seat;
        }
        setSeats(arr);
    }

    const checkedCinemaArray = () => {
        const arr = [];
        if (!rowsAndSeats.numberOfRows || !rowsAndSeats.numberOfSeat) {
            return [[]];
        }
        for (let i = 0; i < rowsAndSeats.numberOfRows; i++) {
            arr.push([]);
            for (let j = 0; j < rowsAndSeats.numberOfSeat; j++) {
                arr[i].push({
                    row: i + 1,
                    seat: j + 1,
                    cinemaId: checkedCinema.id,
                    status: 'standart',
                    isEmploy: false,
                });
            }
        }
        return arr;
    }

    const changeStatus = ({row, seat, status}) => {
        const indexStatus = statuses.indexOf(status);
        const newStatus = statuses[indexStatus + 1] || statuses[0];
        setSeats((prevState) => {
            const newState = [...prevState];
            newState[row - 1][seat - 1].status = newStatus;
            return newState
        })
    }

    const resetRowsAndSeats = () => {
        setRowsAndSeats({
            numberOfRows: checkedCinema.numberOfRows,
            numberOfSeat: checkedCinema.numberOfSeat
        })
    };

    const updateCinema = async () => {
        const response = await fetch(`/api/cinemas/${checkedCinema.id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                ...checkedCinema,
                ...rowsAndSeats
            }),
            headers: {'Content-Type': 'application/json',}
        });
        if (!response.ok) {
            return console.error(response);
        }
        const data = await response.json();
        setCinemas(cinemas.map(cinema =>
            cinema.id === data.id ? data : cinema
        ));
    }

    const changeSeats = async (url, method, seats) => {
        const response = await fetch(url, {
            method,
            body: JSON.stringify(seats),
            headers: {'Content-Type': 'application/json',}
        });
        if (!response.ok)
            throw new Error(response.statusText);
        const data = await response.json();
        console.log(data);
    }

    const update = async () => {
        try {
            for await (const seat of seats.flat()) {
                if (seat.id) {
                    await changeSeats(`/api/seats/${seat.id}`, 'PATCH', seat)
                } else {
                    await changeSeats(`/api/seats/store`, 'POST', seat);
                }
            }

            // await changeSeats(`/api/seats/${checkedCinema.id}`, 'PATCH', seats.flat().filter(({id}) => id));
            // await changeSeats(`/api/seats/store`, 'POST', seats.flat().filter(({id}) => !id));
            // await changeSeats(`/api/seats/${checkedCinema.id}`, 'DELETE', seats.filter(({id}) => id));
            // await updateCinema();
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        cinemas[0] && setCheckedCinema(Object.assign({}, cinemas[0]));
    }, [cinemas]);

    useEffect(() => {
        resetRowsAndSeats();
        initSeats();
    }, [checkedCinema]);

    useEffect(() => {
        setSeats(checkedCinemaArray());
    }, [rowsAndSeats]);

    return (
        <section className="conf-step">
            <header className={'conf-step__header ' + classHeader}
                    onClick={changeOpen}>
                <h2 className="conf-step__title">Конфигурация залов</h2>
            </header>
            <div className="conf-step__wrapper">
                <p className="conf-step__paragraph">Выберите зал для конфигурации:</p>
                <ul className="conf-step__selectors-box">
                    {
                        cinemas.map((cinema) => (
                            <li key={cinema.id}>
                                <input type="radio" className="conf-step__radio" name="chairs-hall"
                                       value={cinema.name}
                                       checked={cinema.name === checkedCinema.name}
                                       onChange={() => setCheckedCinema(cinema)}/>
                                <span className="conf-step__selector">{cinema.name}</span>
                            </li>
                        ))
                    }
                </ul>
                <p className="conf-step__paragraph">Укажите количество рядов и максимальное количество кресел в
                    ряду:</p>
                <div className="conf-step__legend">
                    <label className="conf-step__label">
                        Рядов, шт
                        <input type="number" className="conf-step__input" placeholder="10"
                               value={rowsAndSeats.numberOfRows}
                               onChange={e => setRowsAndSeats({...rowsAndSeats, numberOfRows: +e.target.value})}
                        />
                    </label>
                    <span className="multiplier">x</span>
                    <label className="conf-step__label">
                        Мест, шт
                        <input type="number" className="conf-step__input" placeholder="8"
                               value={rowsAndSeats.numberOfSeat}
                               onChange={e => setRowsAndSeats({...rowsAndSeats, numberOfSeat: +e.target.value})}
                        />
                    </label>
                </div>
                <p className="conf-step__paragraph">Теперь вы можете указать типы кресел на схеме зала:</p>
                <div className="conf-step__legend">
                    <span className="conf-step__chair conf-step__chair_standart"></span> — обычные кресла
                    <span className="conf-step__chair conf-step__chair_vip"></span> — VIP кресла
                    <span className="conf-step__chair conf-step__chair_disabled"></span> — заблокированные (нет
                    кресла)
                    <p className="conf-step__hint">Чтобы изменить вид кресла, нажмите по нему левой кнопкой
                        мыши</p>
                </div>

                <div className="conf-step__hall">
                    <div className="conf-step__hall-wrapper">
                        {seats.map((row, i) =>
                            <div key={i} className="conf-step__row">
                                {row.map((item) =>
                                    <span key={`${item.row}-${item.seat}`}
                                          className={`conf-step__chair ${typeSeat[item.status]}`}
                                          onClick={() => changeStatus(item)}></span>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                <fieldset className="conf-step__buttons text-center">
                    <button className="conf-step__button conf-step__button-regular"
                            onClick={resetRowsAndSeats}>Отмена
                    </button>
                    <button className="conf-step__button conf-step__button-accent"
                            onClick={update}>Сохранить
                    </button>
                </fieldset>
            </div>
        </section>
    )
}

export default ConfigCinema;
