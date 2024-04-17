
import './study.css'
import CustomLinkButton from "@/components/utlitComponents/customButton/CustomLinkButton";
import Container from "@/share/container/Container";
const Stidy = () => {
    return (
        <div className="">
            <Container>
                <div className="">
                    {/* <Image src={bannerStudy} alt="iamge"></Image> */}
                    <div className="text-center relative   studyBg max-h-[600ox] w-full overflow-hidden ">
                        {/* <Image className="  w-full " src={bannerStudy} alt="iamge"></Image> */}

                        <div className=" absolute left-0 right-0 bottom-0 text-white  top-0 w-full h-full bg-[#00000039] flex justify-center items-center   gap-2">
                            <div className=" space-y-3   max-w-[600px] mx-auto">
                                <h1 className=" text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px]  text-white  font-bold">Places To Study</h1>
                                <p className=" text-[17px] font-normal">There are group study rooms, individual study carrels, computers labs, and other spaces to study in the Libraries</p>
                                <div className="  max-w-[250px]  mx-auto  py-2">
                                    <CustomLinkButton title={"Reserve A Group Room"} path={"/"} primary_bg={"bg-primary "}></CustomLinkButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="  bg-gradient-to-r from-[#4F46E5] via-[#CFD1FC] to-[#66E0EE]  bg py-10" >
                        <Container>
                            <div className="flex justify-between flex-col  md:flex-row text-white  gap-10 ">
                                <div>
                                    <h4>Donation</h4>
                                    <h4>Support the Library, Give Today.</h4>
                                </div>
                                <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"> Make A Donation</button>
                            </div>
                        </Container>
                    </div>


                </div>
            </Container>
        </div>
    );
};

export default Stidy;