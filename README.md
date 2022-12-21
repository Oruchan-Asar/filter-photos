`Link for preview`: [title](https://www.example.com)

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

---

## **`Filters`**:

---

### `Blur`:

Blur filtering is a method of applying a blur effect to an image by averaging the colors of the pixels in the image and applying the average value to all of the pixels. This can make the image look less sharp and defined, as the edges and details of the image are smoothed out.

There are various types of blur filters that can be applied, such as Gaussian blur and box blur. Gaussian blur uses a Gaussian function to weight the pixels, while box blur uses a simple box function to average the pixels. The type of blur filter used can affect the appearance of the blur effect.

Blur filtering is often used to soften the appearance of an image or to reduce noise or distractions in the background. It can also be used to create a sense of depth or to draw attention to a particular area of the image.

### `Grayscale`:

Grayscale filtering is a method of converting an image to grayscale by removing all of the color information and leaving the image in black and white. This is typically done by converting the image to the HSL (hue, saturation, lightness) color space and setting the saturation value to zero.

Grayscale filtering can be useful for emphasizing the form and texture of the objects in the image, as the lack of color can draw the viewer's attention to these features. It can also be useful for creating a particular mood or atmosphere, as the absence of color can give the image a more serious or dramatic feel.

### `Brightness`:

Brightness filtering is a method of adjusting the overall brightness of an image by changing the luminance of the pixels. Increasing the brightness makes the image appear lighter, as the luminance of the pixels is increased, while decreasing the brightness makes the image appear darker, as the luminance of the pixels is decreased.

Brightness filtering can be useful for correcting the exposure of an image or for creating a particular mood or atmosphere. For example, increasing the brightness of an image can make it appear more cheerful and upbeat, while decreasing the brightness can make it appear more somber or moody.

### `Contrast`:

Contrast filtering is a method of adjusting the difference between the darkest and lightest areas of an image by stretching or compressing the range of luminance values. Increasing the contrast makes the differences between the darkest and lightest areas more pronounced, as the range of luminance values is stretched, while decreasing the contrast makes the differences less pronounced, as the range of luminance values is compressed.

Contrast filtering can be useful for correcting the contrast of an image or for creating a particular visual style. For example, increasing the contrast of an image can make it appear more vibrant and dynamic, while decreasing the contrast can make it appear more muted and subtle.

### `Invert`:

Invert filtering is a method of inverting the colors of an image by reversing the values of the red, green, and blue channels. This means that areas that were previously light become dark, and areas that were previously dark become light.

Invert filtering can be useful for creating a negative image or for achieving a particular visual effect. It can also be used to quickly switch the light and dark areas of an image, which can be useful for correcting the exposure or for creating a particular mood or atmosphere.

### `Saturate`:

Saturate filtering is a method of adjusting the saturation of an image by changing the intensity of the colors. Increasing the saturation makes the colors more vibrant and intense, as the saturation value is increased, while decreasing the saturation makes the colors less vibrant and more muted, as the saturation value is decreased.

Saturate filtering can be useful for correcting the saturation of an image or for creating a particular mood or atmosphere. For example, increasing the saturation of an image can make it appear more vibrant and lively, while decreasing the saturation can make it appear more muted and subdued.

### `Sepia`:

Sepia filtering is a method of applying a sepia tone to an image by converting the image to the HSL (hue, saturation, lightness) color space and adjusting the hue and saturation values to create a brownish-grey color. This method is often used to give old photographs a vintage look.

### `Backdrop-blur`:

Backdrop blur filtering is a method of applying a blur effect to an image, but only to the areas that are not in focus. This is typically done by using a depth map or by applying image segmentation to identify the areas of the image that are in focus and applying the blur effect to the rest of the image.

This can create a bokeh effect, where the main subject of the image is in focus and the background is blurred, which can be used to draw attention to the subject or to create a sense of depth. It can also be used to soften the appearance of the background or to reduce noise or distractions.

### `Opacity`:

This method adjusts the transparency of the image by changing the alpha value of the pixels. Increasing the opacity makes the image more opaque and less transparent, as the alpha value is increased, while decreasing the opacity makes the image more transparent, as the alpha value is decreased. This method can be useful for creating the appearance of layers or for blending the image with another image or background.

To use the "opacity" filter, you can specify a value between 0 and 1, where 0 represents complete transparency and 1 represents complete opaqueness. For example, a value of 0.5 would make the image 50% transparent, while a value of 0.8 would make the image 80% transparent.

It's important to note that the "opacity" filter only affects the transparency of the image and does not change the actual colors or luminance values of the pixels. To change the colors or luminance values of the pixels, you can use other filters such as "brightness" or "saturate".
