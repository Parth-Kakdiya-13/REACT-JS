import profilePicture from '../assets/pk_01.jpg';
import axios from 'axios';

const Profile = () => {


    const handleDownload = async (fileName) => {
        try {
            const response = await axios.get(`https://your-backend-url.com/download/${fileName}`, {
                responseType: 'blob',
            });


            // Create a URL for the blob and trigger the download
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', fileName); // Specify the file name
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        } catch (error) {
            console.error('Error while downloading the file:', error);
        }
    };


    return (
        <main className={`w-5/12 max-md:w-full flex items-center rounded-ms bg-stone-200 z-20 profile`}>
            <div className='flex flex-col items-center'>
                <img src={profilePicture} className='w-1/2 h-fit' />
                <button className='w-fit rounded-xl px-5 py-2 bg-purple-500 text-white mt-5' onClick={() => handleDownload('Resume.pdf')}>Download Resume</button>
            </div>
        </main>
    )
}



export default Profile;