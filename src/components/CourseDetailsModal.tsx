"use client";

import React from "react";
import { X, Clock, BarChart3, CheckCircle, Code, Target } from "lucide-react";

interface Course {
  title: string;
  image: string;
  description: string;
  level: string;
  duration: string;
  prerequisites: string;
  technologies: string[];
  learningOutcomes: string[];
}

interface CourseDetailsModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
}

const CourseDetailsModal: React.FC<CourseDetailsModalProps> = ({ course, isOpen, onClose }) => {
  if (!isOpen || !course) return null;

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'Intermediate':
        return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
      case 'Advanced':
        return 'text-purple-400 bg-purple-400/10 border-purple-400/30';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900/95 border border-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative">
          <img 
            src={course.image} 
            alt={course.title}
            className="w-full h-48 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-3 mb-2">
              <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getLevelColor(course.level)}`}>
                {course.level}
              </span>
              <span className="flex items-center gap-1 text-gray-300 text-sm">
                <Clock className="w-4 h-4" />
                {course.duration}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white">{course.title}</h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Course Overview
            </h3>
            <p className="text-gray-300 leading-relaxed">{course.description}</p>
          </div>

          {/* Prerequisites */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Prerequisites
            </h3>
            <p className="text-gray-300">{course.prerequisites}</p>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Code className="w-5 h-5" />
              Technologies You'll Learn
            </h3>
            <div className="flex flex-wrap gap-2">
              {course.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-800 text-gray-300 rounded-lg text-sm border border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Learning Outcomes */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Target className="w-5 h-5" />
              What You'll Achieve
            </h3>
            <ul className="space-y-2">
              {course.learningOutcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-800">
            <button
              onClick={onClose}
              className="flex-1 py-3 px-6 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors font-medium"
            >
              Close
            </button>
            <button
              onClick={() => {
                // This will be updated to navigate to the actual course
                onClose();
              }}
              className={`flex-1 py-3 px-6 text-white rounded-lg transition-all duration-300 font-semibold ${
                course.level === 'Beginner' ? 'bg-green-500 hover:bg-green-600' :
                course.level === 'Intermediate' ? 'bg-blue-500 hover:bg-blue-600' :
                'bg-purple-500 hover:bg-purple-600'
              }`}
            >
              Start Learning
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsModal;