import AvatarImage from "./AvaterImage";

export default function AvaterImageList({ imgList }) {
    return (
        <div>
            {imgList.map((item, idx) => 
                <AvatarImage img={item.img} style={item.style} key={idx}/>

            )}
        </div>
    )
}