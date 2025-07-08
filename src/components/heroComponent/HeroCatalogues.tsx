import HeroCatalogue from '../../assets/images/heroImages/heroCatalogues.webp';
const HeroCatalogues: React.FC = () => {
    return (
        <section>
            <section className='h-screen 2xl:h-[790px] xl:h-[750px] md:h-[650px] sm:h-[600px] sm-d:h-[550px] 2xs:h-[500px] w-full'>
                <img src={HeroCatalogue} alt="catalogues" className='h-full w-full object-cover' />
            </section>
        </section>
    )
}
export default HeroCatalogues