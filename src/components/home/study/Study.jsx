import Image from "next/image";
import bannerStudy from "../../../../public/image/home/bg_study-copyright.jpg"
import './study.css'
import Container from "@/share/container/Container";
import CustomLinkButton from "@/components/utlitComponents/customButton/CustomLinkButton";
const Stidy = () => {
    return (
        <div className=" py-6 ">
            <Container>
                <div className="">
                    {/* <Image src={bannerStudy} alt="iamge"></Image> */}
                    <div className="text-center relative   max-h-[600ox] w-full overflow-hidden ">
                        <Image className="  w-full " src={bannerStudy} alt="iamge"></Image>

                        <div className=" absolute left-0 right-0 bottom-0 text-white  top-0 w-full h-full bg-[#00000039] flex justify-center items-center   gap-2">
                            <div className=" space-y-3   max-w-[600px] mx-auto">
                                <h1 className=" text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px]  text-white  font-bold">Places To Study</h1>
                                <p className=" text-[17px] font-normal">There are group study rooms, individual study carrels, computers labs, and other spaces to study in the Libraries</p>
                                <div  className="  max-w-[250px]  mx-auto  py-2">
                                    <CustomLinkButton title={"Reserve A Group Room"} path={"/"} primary_bg={"bg-[#ff6900] "}></CustomLinkButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between text-white p-10 bg-red-600">
                        <div>
                            <h4>Donation</h4>
                            <h4>Support the Library, Give Today.</h4>
                        </div>
                        <button className="bg-white hover:bg-green-600 text-black  text-sm rounded-lg p-3 ">
                            Make A Donation
                        </button>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default Stidy;