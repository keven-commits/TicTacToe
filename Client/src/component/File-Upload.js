import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from "axios";

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function InputFileUpload() {

  const handleFileUpload = async (event) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('file', files[i]);
    }

    try {
      await axios.post('http://localhost:3030/UPLOADS', formData);

      alert('Upload terminé !');
      
    } catch (err) {
      console.error("UPLOAD ERROR :", err.response || err);
      alert('Erreur lors de l’upload');
    }
  };

  return (
    <Button
      component="label"
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      <VisuallyHiddenInput
        type="file"
        onChange={handleFileUpload}
        multiple={true}
      />
    </Button>
  );
}