import {
  AiFillLinkedin,
  AiOutlineDownload,
  AiOutlineGithub,
} from "react-icons/ai";

export default function Footer() {
    const onButtonClick = () => {
        fetch('CVmanuel2023-1.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'CVmanuel2023-1.pdf';
                alink.click();
            })
        })
    }
  return (
    <div className="flex justify-between px-40 py-14 bg-slate-800 text-slate-200">
      <a
        href="https://www.linkedin.com/in/manuel-alejandro-valderrama-fuentes-13416019b/"
        target="_blank"
      >
        <AiFillLinkedin size="2em" className="inline mx-1" />
        Manuel Valderrama
      </a>
      <a href="https://github.com/manecofe" target="_blank">
        <AiOutlineGithub size="2em" className="inline mx-1" />
        manecofe
      </a>
      <button onClick={onButtonClick}>
        <AiOutlineDownload size="2em" className="inline mx-1" />
        Donwload my CV!
      </button>
    </div>
  );
}
