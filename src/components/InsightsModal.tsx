import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface JobDescriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (jobDescription: string) => void;
}

export const JobDescriptionModal = ({
  isOpen,
  onClose,
  onSubmit,
}: JobDescriptionModalProps) => {
  const [jobDescription, setJobDescription] = useState("");

  const handleSubmit = () => {
    if (jobDescription.trim()) {
      onSubmit(jobDescription);
      setJobDescription(""); // Reset input
      onClose(); // Close modal
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Enter Job Description</DialogTitle>
          <DialogDescription>
            Provide the job description for the position you want to apply to.
            We'll analyze your eligibility based on your resume.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="job-description">Job Description</Label>
            <Input
              id="job-description"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="e.g., Software Engineer requiring 3+ years of React experience..."
              className="w-full"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!jobDescription.trim()}
            className="cursor-pointer"
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
