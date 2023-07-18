import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../../server/utils/dbConnect";
import Foods from "../../../../server/models/food";

dbConnect();

export async function GET(request: Request) {
  // try {
    const foods = await Foods.find({});
    return NextResponse.json({ foods });
  // } catch (err) {
  //   Promise.reject(err);
  // }
}

// export async function POST(request: Request) {
//   const newRequest = request.json()
//   const { title } = newRequest
//   const { method, body } = request;
//   const formData = await request.formData()

//   await Food.create({title: formData. })
// }

// export async function POST(request: Request) {
//   const res = await request.json() // res now contains body
//   console.log(res)
// }

export async function POST(request: Request) {
  const res = await request.json(); // res now contains body
  try {
    await Foods.create({
      title: res.title,
      description: res.description,
      price: res.price,
      vote: res.vote,
      discount: res.discount,
      imgSrc: res.imgSrc,
      branches: res.branches,
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
  return NextResponse.json({ res });
}
