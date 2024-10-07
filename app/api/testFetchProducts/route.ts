import { NextResponse } from 'next/server';
import { fetchProducts } from '@/utils/fetchProducts';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const searchTerm = searchParams.get('searchTerm');

  if (!searchTerm) {
    return NextResponse.json({ error: 'Search term is required' }, { status: 400 });
  }

  try {
    const result = await fetchProducts(JSON.stringify({ searchTerm }));
    return NextResponse.json({
      productLinks: result.productLinks,
      message: result.message,
      count: result.productLinks.length
    });
  } catch (error) {
    console.error('Error in testFetchProducts route:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}