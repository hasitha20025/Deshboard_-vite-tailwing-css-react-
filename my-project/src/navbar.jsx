import profile from './assets/Profile.svg';
export default function Navbar() {

  return (
    <>
      <div class="w-1/4 text-zinc-50 bg-black">
        <div className="ml-10">

          <div className="mt-10">
            <div>
                <img className="h-20 w-20" src={profile} alt="profile-pic" />
                <div className='w-6 h-6 bg-red-500 rounded-full text-center transform -translate-y-1/4 absolute left-28 '>
                   4                
                </div>
            </div>
            
            <p className="text-2xl font-semibold mt-3">Samantha</p>
            <p className="text-xs">samantha@email.com</p>
          </div>

          

          <div className="mt-20 text-lg font-medium">
            <p className="mt-5 ">Dashboard</p>
            <p className="mt-5">Expenses</p>
            <p className="mt-5">Wallets</p>
            <p className="mt-5">Summary</p>
            <p className="mt-5">Accounts</p>
            <p className="mt-5">Settings</p>
          </div>
        </div>
      </div>
    </>
  );
}
