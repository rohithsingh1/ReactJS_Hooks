import React, {useState} from 'react'
import "./styles.css";

const images=[
    {id: 1, src: "https://picsum.photos/id/1015/300/200"},
    {id: 2, src: "https://picsum.photos/id/1025/300/200"},
    {id: 3, src: "https://picsum.photos/id/1035/300/200"}
];

function ViewTransitions() {
    const [selected, setSelected]=useState(null);

    const startTransition=(fn) => {
        if (document.startViewTransition) {
            document.startViewTransition(fn);
        } else {
            fn();
        }
    };
    return (
        <div className="container">
            {!selected? (
                <div className="gallery">
                    {images.map((img) => (
                        <img
                            key={img.id}
                            src={img.src}
                            alt=""
                            style={{viewTransitionName: `img-${img.id}`}}
                            onClick={() => startTransition(() => setSelected(img))}
                        />
                    ))}
                </div>
            ):(
                <div className="detail" onClick={() => startTransition(() => setSelected(null))}>
                    <img
                        src={selected.src}
                        alt=""
                        style={{viewTransitionName: `img-${selected.id}`}}
                    />
                </div>
            )}
        </div>
    );
}

export default ViewTransitions