'use strict';
var paths = {};

// Folder naming conventions.
paths.siteFolderName     = 'build';
paths.sourceFolderName   = 'source';
paths.tempFolderName     = '.tmp';

paths.assetsFolderName   = 'assets';
paths.stylesFolderName   = 'css';
paths.imageFolderName    = 'img';
paths.scriptFolderName   = 'js';
paths.iconFolderName     = 'icons';
paths.fontFolderName     = 'fonts';
paths.videoFolderName     = 'video';

paths.layoutsFolderName  = '_layouts';
paths.includesFolderName = '_includes';

paths.prodUrl            = 'http://ivanbabko.net';


// Directory locations.
paths.sourceDir          = paths.sourceFolderName + '/';
paths.assetsDir          = paths.assetsFolderName + '/';
paths.tempDir            = paths.tempFolderName + '/';
paths.siteDir            = paths.siteFolderName + '/';


// Source asset files locations.
paths.sassFiles          = paths.sourceDir + paths.assetsDir + paths.stylesFolderName;
paths.jsFiles            = paths.sourceDir + paths.assetsDir + paths.scriptFolderName;
paths.iconFiles          = paths.sourceDir + paths.assetsDir + paths.iconFolderName;
paths.imageFiles         = paths.sourceDir + paths.assetsDir + paths.imageFolderName;
paths.fontFiles          = paths.sourceDir + paths.assetsDir + paths.fontFolderName;
paths.videoFiles         = paths.sourceDir + paths.assetsDir + paths.videoFolderName;


// Temp asset files locations.
paths.assetFilesTemp     = paths.tempDir + paths.assetsFolderName
paths.sassFilesTemp      = paths.tempDir + paths.assetsDir + paths.stylesFolderName;
paths.jsFilesTemp        = paths.tempDir + paths.assetsDir + paths.scriptFolderName;
paths.iconFilesTemp      = paths.tempDir + paths.assetsDir + paths.iconFolderName;
paths.imageFilesTemp     = paths.tempDir + paths.assetsDir + paths.imageFolderName;
paths.fontFilesTemp      = paths.tempDir + paths.assetsDir + paths.fontFolderName;
paths.videoFilesTemp     = paths.tempDir + paths.assetsDir + paths.videoFolderName;


// Build asset files locations.
paths.assetFilesSite     = paths.siteDir + paths.assetsFolderName
paths.sassFilesSite      = paths.siteDir + paths.assetsDir + paths.stylesFolderName;
paths.jsFilesSite        = paths.siteDir + paths.assetsDir + paths.scriptFolderName;
paths.iconFilesSite      = paths.siteDir + paths.assetsDir + paths.iconFolderName;
paths.imageFilesSite     = paths.siteDir + paths.assetsDir + paths.imageFolderName;
paths.fontFilesSite      = paths.siteDir + paths.assetsDir + paths.fontFolderName;
paths.videoFilesSite     = paths.siteDir + paths.assetsDir + paths.videoFolderName;


// Glob patterns by file type.
paths.sassPattern        = '/**/*.scss';
paths.jsPattern          = '/**/*.js';
paths.imagePattern       = '/**/*.+(jpg|JPG|jpeg|JPEG|png|PNG|svg|SVG|gif|GIF|webp|WEBP|tif|TIF)';
paths.iconPattern        = '/**/*.+(svg|SVG)';
paths.videoPattern       = '/**/*.+(mp4|MP4|ogg|OGG|webm|WEBM)';
paths.markdownPattern    = '/**/*.+(md|MD|markdown|MARKDOWN)';
paths.htmlPattern        = '/**/*.html';
paths.txtPattern         = '/**/*.txt';
paths.xmlPattern         = '/**/*.{xml,json}';
paths.ymlPattern         = '/**/*.yml';


// File globs
paths.htmlFilesGlob      = paths.sourceFolderName + paths.htmlPattern
paths.imageFilesGlob     = paths.imageFiles + paths.imagePattern
paths.videoFilesGlob     = paths.videoFiles + paths.videoPattern
paths.iconFilesGlob      = paths.iconFiles + paths.iconPattern
paths.jsFilesGlob        = paths.jsFiles + paths.jsPattern
paths.mdFilesGlob        = paths.sourceFolderName + paths.markdownPattern
paths.sassFilesGlob      = paths.sassFiles + paths.sassPattern
paths.txtFilesGlob       = paths.sourceFolderName + paths.txtPattern
paths.xmlFilesGlob       = paths.sourceFolderName + paths.xmlPattern
paths.ymlFilesGlob       = paths.sourceFolderName + paths.ymlPattern

module.exports = paths;
