`Link for preview`: [to filter your photos](https://filfilter.netlify.app)

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

---

# Image Processing Project

# Filters

## Blur:

Blur filtering is a method of applying a blur effect to an image by averaging the colors of the pixels in the image and applying the average value to all of the pixels. This can make the image look less sharp and defined, as the edges and details of the image are smoothed out.

There are various types of blur filters that can be applied, such as Gaussian blur and box blur. Gaussian blur uses a Gaussian function to weigh the pixels, while box blur uses a simple box function to average the pixels. The type of blur filter used can affect the appearance of the blur effect.

Blur filtering is often used to soften the appearance of an image or to reduce noise or distractions in the background. It can also be used to create a sense of depth or to draw attention to a particular area of the image.

- Gaussian blur: This is a widely used blur filter that uses a Gaussian function to blur the image. It is typically a very smooth blur and is often used to soften images or reduce noise.
- Motion blur: This type of blur simulates the effect of movement by blurring the image in a specific direction. It is often used to create the appearance of movement or to add a sense of dynamism to an image.
- Box blur: This type of blur uses a simple box-shaped kernel to blur the image. It is a fast and efficient blur, but it can produce blocky artifacts in the resulting image.
- Median blur: This type of blur uses the median value of a group of pixels to replace the value of the center pixel. It is often used to remove noise from an image while preserving edges.

## Grayscale:

Grayscale filtering is a method of converting an image to grayscale by removing all of the color information and leaving the image in black and white. This is typically done by converting the image to the HSL (hue, saturation, lightness) color space and setting the saturation value to zero.

Grayscale filtering can be useful for emphasizing the form and texture of the objects in the image, as the lack of color can draw the viewer's attention to these features. It can also be useful for creating a particular mood or atmosphere, as the absence of color can give the image a more serious or dramatic feel.

There are several different methods for converting an image to grayscale, including:

- Average method: This method converts an image to grayscale by averaging the values of the red, green, and blue channels of the image. The resulting value is then applied to all three channels to create a grayscale version of the image.
- Luminosity method: This method converts an image to grayscale by using the luminosity of each pixel to determine the grayscale value. The luminosity of a pixel is calculated using the following formula: (0.21 * R) + (0.72 * G) + (0.07 * B), where R, G, and B represent the red, green, and blue channels of the pixel.
- Desaturation method: This method converts an image to grayscale by desaturating the colors in the image. It does this by reducing the saturation of all pixels in the image to zero, while preserving the hue and luminosity of each pixel.

## Brightness**:**

Brightness filtering is a method of adjusting the overall brightness of an image by changing the luminance of the pixels. Increasing the brightness makes the image appear lighter, as the luminance of the pixels is increased, while decreasing the brightness makes the image appear darker, as the luminance of the pixels is decreased.

Brightness filtering can be useful for correcting the exposure of an image or for creating a particular mood or atmosphere. For example, increasing the brightness of an image can make it appear more cheerful and upbeat, while decreasing the brightness can make it appear more somber or moody.

There are several different methods for adjusting the brightness of an image, including:

- Linear brightness adjustment: This method adjusts the brightness of an image by multiplying the pixel values by a constant value. For example, multiplying the pixel values by 2 will double the intensity of the pixels and make the image appear twice as bright. Multiplying the pixel values by 0.5 will halve the intensity of the pixels and make the image appear half as bright.
- Gamma correction: This method adjusts the brightness of an image by applying a non-linear transformation to the pixel values. It is often used to correct the brightness of an image that appears too dark or too bright due to the characteristics of the display device.
- Histogram equalization: This method adjusts the brightness of an image by redistributing the pixel values to cover the full range of possible values. It is often used to enhance the contrast of an image by stretching the range of pixel values.

## Contrast:

Contrast filtering is a method of adjusting the difference between the darkest and lightest areas of an image by stretching or compressing the range of luminance values. Increasing the contrast makes the differences between the darkest and lightest areas more pronounced, as the range of luminance values is stretched, while decreasing the contrast makes the differences less pronounced, as the range of luminance values is compressed.

Contrast filtering can be useful for correcting the contrast of an image or for creating a particular visual style. For example, increasing the contrast of an image can make it appear more vibrant and dynamic, while decreasing the contrast can make it appear more muted and subtle.

There are several different methods for adjusting the contrast of an image, including:

- Linear contrast adjustment: This method adjusts the contrast of an image by multiplying the pixel values by a constant value. For example, multiplying the pixel values by 2 will increase the contrast of the image by doubling the difference in intensity between the darkest and lightest pixels. Multiplying the pixel values by 0.5 will decrease the contrast of the image by halving the difference in intensity between the darkest and lightest pixels.
- Histogram stretching: This method adjusts the contrast of an image by stretching the range of pixel values to cover the full range of possible values. It is often used to enhance the contrast of an image by stretching the range of pixel values to make the darkest pixels as dark as possible and the lightest pixels as light as possible.
- Equalization: This method adjusts the contrast of an image by redistributing the pixel values to cover the full range of possible values. It is often used to enhance the contrast of an image by stretching the range of pixel values to make the most common pixel values as close as possible to the middle of the range.

## Invert:

Invert filtering is a method of inverting the colors of an image by reversing the values of the red, green, and blue channels. This means that areas that were previously light become dark, and areas that were previously dark become light.

Invert filtering can be useful for creating a negative image or for achieving a particular visual effect. It can also be used to quickly switch the light and dark areas of an image, which can be useful for correcting the exposure or for creating a particular mood or atmosphere.

To invert an image, the values of each pixel are subtracted from the maximum value possible for that color channel. For example, if the maximum value for a color channel is 255, the inverted value of a pixel with a value of 128 would be 255 - 128 = 127.

## Saturate:

Saturate filtering is a method of adjusting the saturation of an image by changing the intensity of the colors. Increasing the saturation makes the colors more vibrant and intense, as the saturation value is increased, while decreasing the saturation makes the colors less vibrant and more muted, as the saturation value is decreased.

Saturate filtering can be useful for correcting the saturation of an image or for creating a particular mood or atmosphere. For example, increasing the saturation of an image can make it appear more vibrant and lively, while decreasing the saturation can make it appear more muted and subdued.

There are several different methods for adjusting the saturation of an image, including:

- Linear saturation adjustment: This method adjusts the saturation of an image by multiplying the saturation value of each pixel by a constant value. For example, multiplying the saturation values by 2 will increase the saturation of the image, while multiplying the saturation values by 0.5 will decrease the saturation of the image.
- Desaturation: This method adjusts the saturation of an image by reducing the saturation of all pixels in the image to zero, while preserving the hue and luminosity of each pixel.
- Saturation mapping: This method adjusts the saturation of an image by mapping the saturation values of the pixels to a new range of values. It is often used to stretch or compress the range of saturation values in the image to create a specific visual effect.

## Sepia:

Sepia filtering is a method of applying a sepia tone to an image by converting the image to the HSL (hue, saturation, lightness) color space and adjusting the hue and saturation values to create a brownish-grey color. This method is often used to give old photographs a vintage look.

To create a sepia effect, the red, green, and blue channels of an image are adjusted to specific values. The formula for creating a sepia effect is typically:

Red = (0.393 * R) + (0.769 * G) + (0.189 * B) Green = (0.349 * R) + (0.686 * G) + (0.168 * B) Blue = (0.272 * R) + (0.534 * G) + (0.131 * B)

where R, G, and B represent the red, green, and blue channels of the pixel.

## Backdrop-blur:

Backdrop blur filtering is a method of applying a blur effect to an image, but only to the areas that are not in focus. This is typically done by using a depth map or by applying image segmentation to identify the areas of the image that are in focus and applying the blur effect to the rest of the image.

This can create a bokeh effect, where the main subject of the image is in focus and the background is blurred, which can be used to draw attention to the subject or to create a sense of depth. It can also be used to soften the appearance of the background or to reduce noise or distractions.

There are several different methods for creating a backdrop-blur effect, including:

- Selective blur: This method involves selecting the background of the image and applying a blur filter to it, while leaving the foreground untouched. This can be done manually using image editing software, such as Adobe Photoshop, or it can be automated using image processing algorithms.
- Masking: This method involves creating a mask for the foreground of the image, and then applying a blur filter to the rest of the image. The mask can be created manually using image editing software, or it can be generated automatically using image processing algorithms.
- Depth map: This method involves generating a depth map of the image, which represents the distance of each pixel from the camera. The pixels in the background can then be blurred using this depth map as a guide.

## Opacity:

This method adjusts the transparency of the image by changing the alpha value of the pixels. Increasing the opacity makes the image more opaque and less transparent, as the alpha value is increased, while decreasing the opacity makes the image more transparent, as the alpha value is decreased. This method can be useful for creating the appearance of layers or for blending the image with another image or background.

To use the "opacity" filter, you can specify a value between 0 and 1, where 0 represents complete transparency and 1 represents complete opaqueness. For example, a value of 0.5 would make the image 50% transparent, while a value of 0.8 would make the image 80% transparent.

It's important to note that the "opacity" filter only affects the transparency of the image and does not change the actual colors or luminance values of the pixels. To change the colors or luminance values of the pixels, you can use other filters such as "brightness" or "saturate".

There are several different methods for adjusting the opacity of an image, including:

- Linear opacity adjustment: This method adjusts the opacity of an image by multiplying the alpha value of each pixel by a constant value. For example, multiplying the alpha values by 0.5 will make the image 50% transparent, while multiplying the alpha values by 0 will make the image fully transparent.
- Opacity mapping: This method adjusts the opacity of an image by mapping the alpha values of the pixels to a new range of values. It is often used to stretch or compress the range of alpha values in the image to create a specific transparency effect.

### Contributors:

Oruçhan Asar

Kağan Coşkun

