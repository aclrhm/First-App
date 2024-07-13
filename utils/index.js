export const checkImageUrl = (url) => {
    if (!url) return false;
  
    // Ekspresi reguler untuk memeriksa URL yang valid untuk gambar
    const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i');
    
    // Memeriksa apakah URL sesuai dengan pola
    return pattern.test(url);
  };
  