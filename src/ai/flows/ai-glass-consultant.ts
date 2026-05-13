'use server';
/**
 * @fileOverview An AI-powered glass consultant that recommends glass types and thicknesses based on project details.
 *
 * - consultGlass - A function that handles the glass consultation process.
 * - GlassConsultationInput - The input type for the consultGlass function.
 * - GlassConsultationOutput - The return type for the consultGlass function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GlassConsultationInputSchema = z.object({
  projectDescription: z
    .string()
    .describe(
      'A detailed description of the project where glass will be used (e.g., shower box, balcony enclosure, display cabinet).'
    ),
  dimensions: z
    .string()
    .describe('The dimensions of the glass needed (e.g., "1.2m x 2.5m", "80cm wide, 200cm high").'),
});
export type GlassConsultationInput = z.infer<typeof GlassConsultationInputSchema>;

const GlassConsultationOutputSchema = z.object({
  recommendedGlassType: z
    .string()
    .describe('The recommended type of glass (e.g., "tempered", "laminated", "standard float").'),
  recommendedThickness: z
    .string()
    .describe('The recommended thickness of the glass (e.g., "6mm", "8mm", "10mm").'),
  reasoning: z
    .string()
    .describe(
      'The detailed reasoning behind the recommendation, considering safety, durability, and project requirements.'
    ),
});
export type GlassConsultationOutput = z.infer<typeof GlassConsultationOutputSchema>;

export async function consultGlass(
  input: GlassConsultationInput
): Promise<GlassConsultationOutput> {
  return glassConsultationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'glassConsultationPrompt',
  input: {schema: GlassConsultationInputSchema},
  output: {schema: GlassConsultationOutputSchema},
  prompt: `You are an expert glass consultant for a glass shop. Your goal is to recommend the most suitable glass type and thickness for a customer's project.

Consider the following factors:
- Project type (e.g., safety, structural integrity, exposure to elements, aesthetic requirements).
- Dimensions (larger or unsupported dimensions often require thicker or stronger glass).
- Common industry standards for safety and durability.

Available glass types include, but are not limited to: tempered glass (safety, strength), laminated glass (safety, sound insulation, UV protection), and standard float glass.

Based on the user's project description and dimensions, provide a recommendation.

Project Description: {{{projectDescription}}}
Dimensions: {{{dimensions}}}`,
});

const glassConsultationFlow = ai.defineFlow(
  {
    name: 'glassConsultationFlow',
    inputSchema: GlassConsultationInputSchema,
    outputSchema: GlassConsultationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
