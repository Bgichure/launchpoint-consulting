"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  FileSpreadsheet,
  FileText,
  Presentation,
  X,
} from "lucide-react";

import Container from "@/components/ui/Container";
import type {
  Project,
  ProjectDocument,
} from "@/data/projects";

type CaseGalleryProps = {
  project: Project;
};

function getDocumentIcon(type: ProjectDocument["type"]) {
  switch (type) {
    case "PPTX":
      return Presentation;

    case "XLSX":
      return FileSpreadsheet;

    case "DOCX":
    case "PDF":
    default:
      return FileText;
  }
}

function getDocumentAction(type: ProjectDocument["type"]) {
  return type === "PDF" ? "View PDF" : `Download ${type}`;
}

export default function CaseGallery({
  project,
}: CaseGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(
    null
  );

  const hasGallery = project.gallery.length > 0;
  const hasDocuments =
    project.documents && project.documents.length > 0;

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const showPreviousImage = () => {
    if (selectedImage === null || project.gallery.length === 0) {
      return;
    }

    setSelectedImage(
      (selectedImage - 1 + project.gallery.length) %
        project.gallery.length
    );
  };

  const showNextImage = () => {
    if (selectedImage === null || project.gallery.length === 0) {
      return;
    }

    setSelectedImage(
      (selectedImage + 1) % project.gallery.length
    );
  };

  useEffect(() => {
    if (selectedImage === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPreviousImage();
      }

      if (event.key === "ArrowRight") {
        showNextImage();
      }
    };

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  if (!hasGallery && !hasDocuments) {
    return null;
  }

  const activeImage =
    selectedImage !== null
      ? project.gallery[selectedImage]
      : null;

  return (
    <>
      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#A98212]">
              Project Assets
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-[#0F172A] md:text-4xl">
              A closer look at the work
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Explore selected project previews and supporting documents
              prepared as part of this engagement.
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            {hasGallery && (
              <div className="mt-12">
                <div className="grid gap-4 md:grid-cols-[1fr_0.8fr] md:items-end">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#A98212]">
                      Project Preview
                    </p>

                    <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-[#0F172A] sm:text-3xl">
                      Selected pages and visuals
                    </h3>
                  </div>

                  <p className="max-w-lg leading-7 text-slate-600 md:justify-self-end md:text-right">
                    A selection of the strategy, research, financial,
                    and design work completed for this project.
                  </p>
                </div>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {project.gallery.map((image, index) => (
                    <figure
                      key={image.src}
                      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C9A227]/30 hover:shadow-md"
                    >
                      <button
                        type="button"
                        onClick={() => setSelectedImage(index)}
                        aria-label={`Open ${image.title || image.alt}`}
                        className="relative block aspect-[16/10] w-full cursor-zoom-in overflow-hidden bg-slate-100 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] focus-visible:ring-offset-2"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />

                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#0F172A]/0 transition-colors duration-300 group-hover:bg-[#0F172A]/15">
                          <span className="translate-y-2 rounded-full border border-white/20 bg-[#0F172A]/80 px-4 py-2 text-sm font-semibold text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            View full image
                          </span>
                        </div>
                      </button>

                      <figcaption className="p-5">
                        {image.title && (
                          <h4 className="text-lg font-semibold text-[#0F172A]">
                            {image.title}
                          </h4>
                        )}

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {image.alt}
                        </p>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            )}

            {hasDocuments && (
              <div
                className={
                  hasGallery
                    ? "mt-16 border-t border-slate-200 pt-12"
                    : "mt-12"
                }
              >
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#A98212]">
                    Project Documents
                  </p>

                  <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-[#0F172A] sm:text-3xl">
                    View the completed deliverables
                  </h3>

                  <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                    Review selected documents prepared for this
                    engagement. Sensitive or confidential client
                    information may be removed.
                  </p>
                </div>

                <div className="mt-8 grid gap-4">
                  {project.documents?.map((document) => {
                    const DocumentIcon = getDocumentIcon(
                      document.type
                    );
                    const isPdf = document.type === "PDF";

                    return (
                      <article
                        key={document.file}
                        className="group flex flex-col gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C9A227]/40 hover:bg-white hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#C9A227]/10">
                            <DocumentIcon
                              size={23}
                              className="text-[#A98212]"
                            />
                          </div>

                          <div>
                            <div className="flex flex-wrap items-center gap-3">
                              <h4 className="text-lg font-semibold text-[#0F172A]">
                                {document.title}
                              </h4>

                              <span className="rounded-full border border-[#C9A227]/25 bg-[#C9A227]/10 px-2.5 py-1 text-[11px] font-bold tracking-wide text-[#A98212]">
                                {document.type}
                              </span>
                            </div>

                            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                              {document.description}
                            </p>
                          </div>
                        </div>

                        <Link
                          href={document.file}
                          target={isPdf ? "_blank" : undefined}
                          rel={
                            isPdf
                              ? "noopener noreferrer"
                              : undefined
                          }
                          download={isPdf ? undefined : true}
                          className="inline-flex min-w-[150px] shrink-0 items-center justify-center gap-2 rounded-xl bg-[#0F172A] px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#1E293B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] focus-visible:ring-offset-2"
                        >
                          {getDocumentAction(document.type)}

                          {isPdf ? (
                            <ExternalLink size={16} />
                          ) : (
                            <Download size={16} />
                          )}
                        </Link>
                      </article>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      {selectedImage !== null && activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Project image viewer"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020617]/95 px-4 py-6 backdrop-blur-sm sm:px-8"
          onClick={closeLightbox}
        >
          <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md sm:left-6 sm:top-6">
            {selectedImage + 1} / {project.gallery.length}
          </div>

          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close image viewer"
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7B746] sm:right-6 sm:top-6"
          >
            <X size={22} />
          </button>

          {project.gallery.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPreviousImage();
              }}
              aria-label="View previous image"
              className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7B746] sm:left-6 sm:h-12 sm:w-12"
            >
              <ChevronLeft size={26} />
            </button>
          )}

          <div
            className="relative h-[78vh] w-full max-w-7xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              priority
              className="object-contain"
              sizes="100vw"
            />
          </div>

          {project.gallery.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNextImage();
              }}
              aria-label="View next image"
              className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7B746] sm:right-6 sm:h-12 sm:w-12"
            >
              <ChevronRight size={26} />
            </button>
          )}

          <div
            className="absolute bottom-4 left-1/2 w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 rounded-2xl border border-white/10 bg-[#0F172A]/80 px-5 py-4 text-center text-white backdrop-blur-md sm:bottom-6"
            onClick={(event) => event.stopPropagation()}
          >
            {activeImage.title && (
              <h3 className="font-semibold">
                {activeImage.title}
              </h3>
            )}

            <p className="mt-1 text-sm leading-6 text-slate-300">
              {activeImage.alt}
            </p>
          </div>
        </div>
      )}
    </>
  );
}