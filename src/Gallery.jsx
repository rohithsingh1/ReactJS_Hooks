const images=[
    {id: 1, src: "https://picsum.photos/id/1015/300/200"},
    {id: 2, src: "https://picsum.photos/id/1025/300/200"},
    {id: 3, src: "https://picsum.photos/id/1035/300/200"}
];

export default function Gallery({goTo}) {
    return (
        <div className="container gallery">
            {images.map((img) => (
                <img
                    key={img.id}
                    src={img.src}
                    alt=""
                    style={{viewTransitionName: `img-${img.id}`}}
                    onClick={() => goTo(`/image/${img.id}`)}
                />
            ))}
        </div>
    );
}
