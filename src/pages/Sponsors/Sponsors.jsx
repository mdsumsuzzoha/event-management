import sponsorLogo1 from '../../assets/images/hubspot.png'
import sponsorLogo2 from '../../assets/images/sap.png'
import sponsorLogo3 from '../../assets/images/adobe.png'
import sponsorLogo4 from '../../assets/images/salesforce.png'
import sponsorLogo5 from '../../assets/images/oracle.png'
import sponsorLogo6 from '../../assets/images/cisco.png'
const Sponsors = () => {
    return (
        <div className='py-4 md:pb-20 shadow bg-green-100 rounded'>
            <div className="text-center space-y-6 max-w-xl mt-10 mx-auto">
                <h2 className="font-bold text-slate-600">SPONSORS</h2>
                <h2 className="text-5xl font-bold">Our Partners</h2>
                <p>Sponsors support events, projects, or individuals financially or through resources in exchange for visibility or association benefits.</p>
            </div>
            <div className="max-w-3xl px-2 mx-auto mt-10 space-y-6 md:mt-20">
                <div className="shadow w-80 h-28 mx-auto bg-white rounded-xl">
                    <img className='h-28 w-full px-3 object-fit rounded-xl my-auto' src={sponsorLogo1} alt="" />
                </div>
                <div className='flex flex-col md:flex-row justify-around gap-2 md:gap-6 '>
                    <div className="shadow w-80 h-28 mx-auto bg-white rounded-xl">
                        <img className='h-28 w-full px-3 object-fit rounded-xl my-auto' src={sponsorLogo2} alt="" />
                    </div>
                    <div className="shadow w-80 h-28 mx-auto bg-white rounded-xl">
                        <img className='h-28 w-full px-3 object-fit rounded-xl my-auto' src={sponsorLogo3} alt="" />
                    </div>
                    <div className="shadow w-80 h-28 mx-auto bg-white rounded-xl">
                        <img className='h-28 w-full px-3 object-fit rounded-xl my-auto' src={sponsorLogo4} alt="" />
                    </div>

                </div>
                <div className='flex flex-col md:flex-row justify-around gap-2 md:gap-6'>
                    <div className="shadow w-80 h-28 mx-auto bg-white rounded-xl">
                        <img className='h-28 w-full px-3 object-fit rounded-xl my-auto' src={sponsorLogo5} alt="" />
                    </div>
                    <div className="shadow w-80 h-28 mx-auto bg-white rounded-xl">
                        <img className='h-28 w-full px-3 object-fit rounded-xl my-auto' src={sponsorLogo6} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sponsors;