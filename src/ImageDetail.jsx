import {useParams} from "react-router-dom";

const images=[
    {id: 1, src: "https://picsum.photos/id/1015/600/400"},
    {id: 2, src: "https://picsum.photos/id/1025/600/400"},
    {id: 3, src: "https://picsum.photos/id/1035/600/400"}
];

export default function ImageDetail({goTo}) {
    const {id}=useParams();
    const image=images.find((img) => img.id===Number(id));

    return (
        <div className="detail" onClick={() => goTo("/")}>
            <img
                src={image.src}
                alt=""
                style={{viewTransitionName: `img-${image.id}`}}
            />
        </div>
    );
}
