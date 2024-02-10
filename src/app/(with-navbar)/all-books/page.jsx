import Pagination from "@/components/Pagination/Pagination";
import AllProducts from "@/components/allProdcuts/AllProducts";
import PrimaryCart from "@/components/carts/primaryCart";
import FilterSection from "@/components/filter/FilterSection";
import Container from "@/share/container/Container";
import { products } from "@/utility/prodcut";

const page = () => {
    return (
        <div>
            <Container>
                <div>
                    <div>
                        <FilterSection></FilterSection>
                    </div>
                    <AllProducts></AllProducts>
                    <div className=" py-10">
                        <Pagination></Pagination>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default page;