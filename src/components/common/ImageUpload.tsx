import { Button, Stack } from "@mui/material";
import ImageUploading, { ImageListType } from "react-images-uploading";

type Props = {
    images: any,
    setImages: any,
    flexDirection?: "row" | "column"
}



const ImageUpload = ({ images, setImages, flexDirection = "row" }: Props) => {
    const maxNumber = 1;

    const onChange = (
        imageList: ImageListType,
        addUpdateIndex: number[] | undefined
    ) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList as never[]);
    };


    return (
        <ImageUploading
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
        >
            {({
                imageList,
                onImageUpload,
                isDragging,
                dragProps
            }) => (
                // write your building UI
                <Stack flexDirection={{ md: flexDirection }} alignItems={"center"} gap={2}>
                    <Button
                        sx={{ px: 4, py: 4.5, bgcolor: '#f1f3f7', textTransform: 'capitalize' }}
                        style={isDragging ? { color: "red" } : undefined}
                        onClick={onImageUpload}
                        {...dragProps}
                    >
                        Click or Drop here
                    </Button>

                    {imageList.map((image, index) => (
                        <Stack justifyContent={"flex-start"} gap={1.5} width={{ xs: 250, md: 300 }} key={index}>

                            <img src={image.dataURL} alt={`${image}-${index + 1}`} />

                        </Stack>
                    ))}
                </Stack>
            )}
        </ImageUploading>
    );
};

export default ImageUpload;