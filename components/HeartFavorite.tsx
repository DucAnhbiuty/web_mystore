"use client"

import { useUser } from "@clerk/nextjs";
import { Heart } from "lucide-react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const HeartFavorite = ({ product }: { product: ProductType }) => {
    const router = useRouter();
    const { user } = useUser();
    const [loading, setLoading] = useState(false);
    const [signedInUser, setSignedInUser] = useState<UserType | null>(null);
    const [isLiked, setIsLiked] = useState(false);

    const getUser = async () => {
        try {
            setLoading(true);
            const res = await fetch("/api/users")
            const data = await res.json()
            setSignedInUser(data)
            setIsLiked(data.wishlist.includes(product._id))
            setLoading(false);
        } catch (err) {
            console.log("[users_GET", err);
        }
    }
    useEffect(() => {
        if (user) {
            getUser()
        }
    }, [user])

    const handleLike = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        try {
            if (!user) {
                router.push("/sign-in");
                return;
            } else {

                setLoading(true)
                const res = await fetch("/api/users/wishlist", {
                    method: "POST",
                    body: JSON.stringify({ productId: product._id }),
                })
                const updateUser = await res.json()
                setSignedInUser(updateUser)
                setIsLiked(updateUser.wishlist.includes(product._id))
            }
        } catch (err) {
            console.log("[wishlist_POST]", err);
        }
    };
    return (
        <button onClick={handleLike}>
           <Heart fill={`${isLiked ? "red" : "white"}`} />
        </button>
    )
}

export default HeartFavorite
