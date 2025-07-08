type Props = {
    img?: string;
    onClick?: () => void;
};

const GallerySmallImage: React.FC<Props> = ({ img, onClick }) => {

    return (
        <div className="h-full text-white rounded-lg overflow-hidden relative cursor-pointer"
            onClick={onClick}>
            {!img ? (
                <p className="flex justify-center items-center w-full h-full text-white bg-gray-800 Loading">
                    No Image
                </p>
            ) : (
                <img
                    src={img}
                    alt="Bedroom"
                    loading="lazy"
                    className="w-full h-full object-cover opacity-70"
                />
            )}
        </div>
    );
};

export default GallerySmallImage;
