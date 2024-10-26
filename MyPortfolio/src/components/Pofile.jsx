import profilePicture from '../assets/profile_img.jpg'

const Profile = () => {
    return (
        <main className={`w-5/12 max-md:w-full flex items-center rounded-ms bg-stone-200 z-20 profile `}>
            <img src={profilePicture} className='w-full h-fit' />
        </main>
    )
}



export default Profile;