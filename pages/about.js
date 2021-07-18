import Head from "next/dist/next-server/lib/head";

const About = () => {
    return (
        <>
            <Head>
            <title>Ninja List | About</title>
            <meta name="keywords" content="ninjas" />
            </Head>
            <div>
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda velit itaque neque aliquam! Voluptatem laborum iure maiores alias consectetur tenetur, optio repellendus veritatis voluptas rerum, praesentium nobis inventore cum quia?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor voluptas similique totam optio accusantium, architecto aliquam obcaecati labore illo sint ratione recusandae non consectetur molestiae fuga mollitia enim, maxime quia.</p>
            </div>
        </>
    );
}
 
export default About;