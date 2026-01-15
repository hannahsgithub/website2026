import { ExternalLink, FileText } from "lucide-react";

const ResumeSection = () => {
    // Format: https://drive.google.com/file/d/YOUR_FILE_ID/preview
    const googleDrivePdfUrl = "https://drive.google.com/file/d/1taaxTZzyPcs2L9f760oFSMFAqY_Valnm/preview";

    return (
        <section
            id="resume"
            className="min-w-[700px] h-full flex flex-col justify-center px-8 py-8"
        >

            <div className="flex flex-col items-center gap-4">
                {/* PDF Viewer */}
                <div className="bg-card border-2 border-foreground/20 rounded-lg overflow-hidden shadow-lg w-[456px] h-[552px]">
                    {googleDrivePdfUrl ? (
                        <iframe
                            src={googleDrivePdfUrl}
                            className="w-full h-full"
                            allow="autoplay"
                            title="Resume PDF"
                        />
                    ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-muted/30">
                            <FileText size={64} className="text-muted-foreground mb-4" />
                            <p className="font-sketch text-muted-foreground text-center px-8">
                                PDF viewer placeholder
                            </p>
                            <p className="font-sketch text-muted-foreground/60 text-sm text-center px-8 mt-2">
                                Add Google Drive PDF link to display resume here
                            </p>
                        </div>
                    )}
                </div>

                {/* Download link */}
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hand-drawn-border inline-flex items-center gap-2 bg-sticky-yellow sticky-note px-4 py-2 font-sketch text-foreground hover:scale-105 transition-transform"
                >
                    <span>Open in new tab</span>
                    <ExternalLink size={16} />
                </a>
            </div>
        </section>
    );
};

export default ResumeSection;