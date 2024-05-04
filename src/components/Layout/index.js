import Cards from "./Cards"

const Layout = ({ products,clickHandle }) => {
    return (
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center">
                        {products.map((product,index) => <Cards product={product} key={index} clickHandle={clickHandle}  />)}
                    </div>
                </div>
            </section>
    );
}

export default Layout