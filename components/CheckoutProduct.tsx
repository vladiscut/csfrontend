import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline"
import Image from "next/image"
// import { urlFor } from "../sanity"
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../redux/basketSlice";
import toast from "react-hot-toast";



interface Props {
    items: Product[]
    id: string
}

function CheckoutProduct({ id, items }: Props) {

    const dispatch = useDispatch()
    const removeItemFromBasket = () => {
        dispatch(removeFromBasket(items[0] ))
        toast.error(`${items[0].title} удалён из корзины`, {
            position: "bottom-center",
        });
    };
    const addItemToBasket = () => {
        dispatch(addToBasket(items[0]))
        toast.success(`${items[0].title} добавлен в корзину`, {
            position: "bottom-center",
        });
    };

    return (
        <div className="flex flex-col gap-x-4 border-b border-gray-300 pb-5 lg:flex-row lg:items-center">
            <div className="relative h-44 w-44">
                <Image
                    src={items[0].product_image[0]?.image}
                    alt='productImage'
                    fill
                    style={{ objectFit: "contain" }}
                />
            </div>

            <div className="flex flex-1 items-end lg:items-center">
                <div className="flex-1 space-y-4">
                    <div className="flex flex-col gap-x-8 text-xl lg:flex-row lg:text-2xl">
                        <h4 className="font-semibold lg:w-96">{items[0].title}</h4>
                        <p className="flex items-end gap-x-1 font-semibold">
                            <ChevronDownIcon className="cursor-pointer h-6 w-6 text-blue-500"
                                onClick={removeItemFromBasket} />
                            {items.length}
                            <ChevronUpIcon className="cursor-pointer h-6 w-6 text-blue-500"
                                onClick={addItemToBasket}
                            />
                        </p>
                    </div>

                    <p className="flex items-end">
                        Размер М
                    </p>
                </div>
                <div>
                    <h4 className="text-xl font-semibold lg:text-2xl">
                        <Currency
                            quantity={items.reduce((total, item) => total + item.price, 0)}
                            currency="RUB"
                        />
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct