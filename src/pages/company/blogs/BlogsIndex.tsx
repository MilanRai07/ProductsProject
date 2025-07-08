import HeroBlogs from "../../../components/heroComponent/HeroBlogs";
import BlogsContainer from "./BlogsContainer";


const BlogsIndex: React.FC = () => {
    return (
        <main className="bg-white">
            <HeroBlogs />
            <BlogsContainer />
        </main>
    )
}
export default BlogsIndex;