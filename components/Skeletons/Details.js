import Skeleton from 'react-loading-skeleton';

const DetailsSkeleton = () => {

    return (
        <div style={{height: "70vh", width: "90%", margin: "0 auto"}}>
            <Skeleton height={200} duration={2} />
            <Skeleton count={1} />
            <Skeleton height={100} duration={2} />
            <Skeleton count={5} />
            <Skeleton width={300} />
        </div>
    )
}

export default DetailsSkeleton;