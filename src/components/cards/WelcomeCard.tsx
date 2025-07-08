const WelcomeCard: React.FC = () => {
    return (
        <div className="w-full h-[420px] x-l:h-[350px] sl2:h-[300px] sl4:h-[270px] text-white p-7 Flex-Col justify-between "
            style={{
                background: 'rgba(64, 64, 64, 1)'
            }}
        >
            <h1 className="font-bold text-lg x-l:text-base sm-d:text-[15px] sl2:text-[13px] sl4:text-[11px] leading-[27px] x-l:leading-[24px] tracking-[0.15em] text-Golden">Welcome to STL</h1>
            <h2 className="w-[280px] font-bold text-[26px] x-l:text-[22px] sm-d:text-[20px] sl2:text-[18px] sl4:text-[16px] leading-[39px] x-l:leading-[30px] tracking-4%">INNOVATIVE IDEAS STYLISH DESIGN</h2>
            <p className="w-[427px] sl2:w-[350px] 2xs:!w-[300px] font-normal text-sm x-l:text-[12px] sm-d:text-[11px] sl2:text-[10px] sl4:text-[9px] leading-[30px] x-l:leading-[25px] sl2:leading-[20px]">At STL, we create modern and stylish interiors that are both beautiful and practical.
                Our innovative designs blend creativity with smart solutions to make every space unique and
                functional. We use the latest trends, quality materials, and thoughtful details to bring your
                vision to life. Whether it's a home or a business,
                we design spaces that feel comfortable, elegant, and perfectly suited to your needs.
            </p>
            {/* <button className="bg-[#161717] w-[169px] x-l:w-[140px] h-[46px] x-l:h-[37px] font-bold text-sm x-l:text-[12px] hover:bg-DarkGolden transition">
                Read More
            </button> */}
        </div>
    )
}
export default WelcomeCard