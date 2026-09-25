import { Button } from "./ui/button";


const Hero = () => {
    return (
        <section className="py-96">
            <div className="container mx-auto">
                <div className="gird">
                    <div className="lg-6">
                        <h1> Every AI. One sidebar.</h1>
                        <p>Summarize pages, explain what you select, and switch <br /> models without leaving your tab.</p>
                        <div className="flex gap-2">
                            <Button>Add to Chrome</Button>
                            <Button variant="outline"> Explore the app</Button>
                        </div>
                    </div>
                    <div className="lg-6">
                        the big ui
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Hero;