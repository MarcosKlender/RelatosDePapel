import { CheckoutList } from "../components/CheckoutList"

export function Checkout({ cart }) {
    return (
      <>
        <h1 className="page-title">Checkout</h1>
        <CheckoutList cart={cart} />
      </>
    )
}