import profilePicture from '../assets/pk_01.jpg';
import API from '../API/api';
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'

const Profile = ({ theme }) => {
    console.log(theme);


    const handleDownload = async (fileName) => {
        try {
            const response = await API.get(`/download/${fileName}`, {
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

    const linkedInLink = () => {
        // Redirect to the desired link
        window.location.href = "https://www.linkedin.com/in/parth-kakdiya";
    };

    const githubLink = () => {
        // Redirect to the desired link
        window.location.href = "https://github.com/parth-Kakdiya-13";
    };


    return (
        <main className={`w-5/12 max-md:w-full flex items-center rounded-ms ${theme === 'light' ? 'bg-stone-200' : ' bg-stone-800'} transition-all duration-700 ease-in  z-20 profile`}>
            <div className='flex flex-col items-center'>
                <img src={profilePicture} className='w-1/2 max-md:w-2/5 h-fit object-cover' />
                <h1 className={`py-5 text-3xl font-thin  ${theme === 'light' ? 'text-black' : 'text-white'}`}>Parth Kakdiya</h1>
                <div className='flex gap-2'>
                    <img src={github} className='w-8 h-8 bg-violet-200 p-1 rounded-md cursor-pointer' onClick={githubLink} />
                    <img src={linkedin} className='w-8 h-8 bg-violet-200 p-1 rounded-md cursor-pointer' onClick={linkedInLink} />
                </div>
                <button className='w-fit rounded-xl px-5 py-2 bg-purple-500 text-white mt-5' onClick={() => handleDownload('parth_kakdiya.pdf')}>Download Resume</button>
            </div>
        </main>
    )
}



export default Profile;
