"use client";

import Image from "next/image";

interface ProjectCardProps {
  title: string;
  location: string;
  capacity?: string;
  imageUrl: string;
  description: string;
  client?: string;
  type?: string;
}

export default function ProjectCard({
  title,
  location,
  capacity,
  imageUrl,
  description,
  client,
  type,
}: ProjectCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:bg-green-50 transition-colors duration-300">
      <div className="relative h-64">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <div className="text-gray-600 mb-4">
          <p className="mb-1 flex items-center gap-2">
            <span className="text-green-600">📍</span>
            {location}
          </p>
          {capacity && (
            <p className="flex items-center gap-2">
              <span className="text-green-600">⚡</span>
              {capacity}
            </p>
          )}
          {client && (
            <p className="flex items-center gap-2">
              <span className="text-green-600">👤</span>
              {client}
            </p>
          )}
          {type && (
            <p className="flex items-center gap-2">
              <span className="text-green-600">🔧</span>
              {type}
            </p>
          )}
        </div>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}
