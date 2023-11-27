import { Button, Stack } from "@mui/material";
import ImageUploading, { ImageListType } from "react-images-uploading";

type Props = {
    images: any,
    setImages: any
}



const ImageGalleryUpload = ({ images, setImages }: Props) => {
    const maxNumber = 69;

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
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
        >
            {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps
            }) => (
                // write your building UI
                <Stack alignItems={"flex-start"} gap={4} mb={2}>
                    <Stack flexDirection={{ md: "row" }} alignItems={"flex-start"} gap={4} mb={2}>
                        <Button
                            sx={{ py: 6, px: 10, bgcolor: '#f1f3f7', textTransform: 'capitalize' }}
                            style={isDragging ? { color: "red" } : undefined}
                            onClick={onImageUpload}
                            {...dragProps}
                        >
                            Click or Drop here
                        </Button>

                        <Button variant="outlined" color="warning" onClick={onImageRemoveAll}>Remove all images</Button>
                    </Stack>

                    {imageList.map((image, index) => (
                        <Stack justifyContent={"flex-start"} gap={1.5} width={{ xs: 250, md: 300 }} key={index}>

                            <img src={image.dataURL} alt={`${image}-${index + 1}`} />

                            <Stack flexDirection={"row"} alignItems={"flex-start"} gap={2} mb={2}>
                                <Button variant="outlined" color="primary" size="small"
                                    sx={{ textTransform: 'capitalize' }}
                                    onClick={() => onImageUpdate(index)}>Update</Button>
                                <Button variant="outlined" color="primary" size="small"
                                    sx={{ textTransform: 'capitalize' }}
                                    onClick={() => onImageRemove(index)}>Remove</Button>
                            </Stack>
                        </Stack>
                    ))}
                </Stack>
            )}
        </ImageUploading>
    );
};

export default ImageGalleryUpload;