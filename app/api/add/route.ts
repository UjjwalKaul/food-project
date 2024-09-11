import { prisma } from '@/app/util/db';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const {
      image,
      label,
      cuisineType,
      dishType,
      calories,
      ingredientLines,
      url,
      userId,
    } = await req.json();

    if (
      !label ||
      !cuisineType ||
      !dishType ||
      !calories ||
      !ingredientLines ||
      !userId
    ) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const newRecipe = await prisma.recipe.create({
      data: {
        image,
        label,
        cuisineType,
        dishType,
        calories: parseFloat(calories),
        ingredientLines,
        url,
        user: { connect: { email: userId } },
      },
    });

    return NextResponse.json(newRecipe, { status: 201 });
  } catch (error) {
    console.error('Error adding recipe:', error);
    return NextResponse.json(
      { error: 'Failed to add recipe' },
      { status: 500 }
    );
  }
}
