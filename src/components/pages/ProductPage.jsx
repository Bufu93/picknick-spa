import ProductPageInfo from '../ProductPageInfo/ProductPageInfo';
import ProductPageReviewsList from '../ProductPageReviewsList/ProductPageReviewsList';
import ReviewsForm from '../ReviewsForm/ReviewsForm';

function ProductPage() {
    return (
        <main>
            <ProductPageInfo />
            <ProductPageReviewsList />
            <ReviewsForm />
        </main>
    );
}

export default ProductPage;
