import HeroCollection from '../../assets/images/heroImages/collections.webp';
import { ReactComponent as Design } from '../../assets/svg/collectionHero/collectionHero.svg';
import { ReactComponent as Two } from '../../assets/svg/collectionHero/2.svg';
import { ReactComponent as Three } from '../../assets/svg/collectionHero/3.svg';
import { ReactComponent as Four } from '../../assets/svg/collectionHero/4.svg';
import { ReactComponent as One } from '../../assets/svg/collectionHero/1.svg';
import { ReactComponent as Arrow } from '../../assets/svg/collectionHero/arrow.svg';

const HeroCollections: React.FC = () => {
    return (
        <section className='bg-blue-300'>
            {/*  h-[528px */}
            <div className="w-full relative h-screen 2xl:h-[790px] xl:h-[750px] md:h-[650px] sm:h-[600px] sm-d:h-[550px] 2xs:h-[500px]">
                <img src={HeroCollection} alt="our collections" className='w-full h-full absolute top-0 left-0 object-cover z-10' />
                <div className='h-full w-full bg-black/40 absolute top-0 left-0 z-20'></div>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30'>
                    <Design className='w-[200px] h-[100px] sm:w-[270px] sm:h-[80px]' />
                    <h1 className='text-[30px] leading-[40px] tracking-[0.05em] font-semibold text-center x-l:text-2xl sm-d:text-xl xs:text-[17px] 2xs:text-[14px] m-d:leading-[25px] sm-d:leading-[23px]'>
                        Design Crew
                    </h1>
                </div>
            </div>
            <div className='w-full h-[270px] 2x-l:h-[370px] m1:h-[300px] sm:!h-[280px] m-0 bg-black relative'>
                <h1 className='text-white absolute top-[10%] left-[7%] 2x-l:text-[20px] sm-d:text-base'>HOW IT WORKS</h1>
                <p className='S-Text left-[7%] bottom-[39%] md:bottom-[45%] sm:top-[38%] sm-d:text-xs'>Connect with an Expert</p>
                <p className='S-Text bottom-[24%] left-[32%] mlg:bottom-[18%] sm:top-[38%] sm:left-[70%] sl3:left-[65%]' >Discuss Your Vision</p>
                <p className='S-Text right-[33%] bottom-[40%] m1:right-[27%] md:bottom-[58%] sm:left-[37%] sl3:left-[30%]  sm:!top-[58%] sm:text-sm sm:w-full '>Collaborate & Customize</p>
                <p className='S-Text right-[10%] bottom-[24%] md:right-[7%] md:bottom-[45%] sm:!top-[81%] sm:left-[42%] sl3:left-[39%]'>Review & Finalize</p>

                <div className='w-[5px] h-[16px]  absolute bottom-[57%] sm:top-[30%] left-[7%] mlg:bottom-[50%] md:!bottom-[56%]'>
                    <One />
                </div>
                <div className='w-[13px] h-[20px] absolute sm:top-[30%] sm:!left-[70%] sl3:!left-[65%] bottom-[38%] left-[32%] mlg:bottom-[28%] md:left-[34%] '>
                    <Two />
                </div>
                <div className='w-[13px] h-[20px] absolute bottom-[55%]  sm:!top-[49%] right-[45%] md:bottom-[67%] sm:!left-[50%] sl3:!left-[50%]'>
                    <Three />
                </div>
                <div className='w-[18px] h-[22px] absolute sm:!top-[72%] right-[17%] bottom-[34%] md:bottom-[55%] sm:left-1/2'>
                    <Four />
                </div>

                {/* arrows */}
                <div className='w-[164px] h-[152px] sm:w-[120px] absolute right-[45%] 2x-l:top-[10%] m1:hidden md:!top-[7%] sm:left-[40%] sm:!top-[50%] '>
                    <Arrow />
                </div>
                <div className='w-[164px] h-[152px] sm:w-[120px] absolute rotate-[170deg] transform scale-x-[-1] m1:hidden right-[21%] bottom-[3%] md:bottom-[20%] sm:right-[3%]  sm:scale-x-[1] sm:rotate-[145deg]'>
                    <Arrow />
                </div>
                <div className='w-[164px] h-[152px]  sm:w-[120px] absolute rotate-[170deg] transform scale-x-[-1] m1:hidden left-[18%] bottom-[2%] md:bottom-[7%] md:left-[7%] sm:scale-x-[1] sm:!left-[40%] sm:!bottom-[2%] sm:rotate-[210deg]'>
                    <Arrow />
                </div>
            </div>

        </section>
    )
}
export default HeroCollections