


export default function Paginacion({info, clickProx = () => {},clickPrev = () => {}}) {
    const { count, next, pages, prev } = info || {};
    const goNext = () => {
        clickProx(next);
    };
    const goPrev = () => {
        clickPrev(prev);
    };
    return  <div>
                <button onClick={goPrev} className="btn btn-dark">Previo</button>
                <button onClick={goNext} className="btn btn-dark">Siguiente</button>
            </div>
}