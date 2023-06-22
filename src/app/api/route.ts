import { NextResponse } from 'next/server'
 
export async function GET(request: Request) {
  const res = {
    hello: 'there'
  }
  return NextResponse.json({ res })
}