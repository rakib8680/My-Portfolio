const downloadResume = () => {
    const resumeUrl = 'MyResume.pdf';
    const anchor = document.createElement('a');
    anchor.href= resumeUrl;
    anchor.download= 'MyResume.pdf';
    anchor.click();
};