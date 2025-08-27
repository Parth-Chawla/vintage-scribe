import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, FileText, BookOpen, TestTube, DollarSign } from "lucide-react";

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UploadModal = ({ isOpen, onClose }: UploadModalProps) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    type: "",
    price: "",
    file: null as File | null,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Upload form submitted:", formData);
    // File upload logic will be implemented with Supabase storage
    onClose();
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "ebook": return <BookOpen className="h-4 w-4" />;
      case "notes": return <FileText className="h-4 w-4" />;
      case "mock-test": return <TestTube className="h-4 w-4" />;
      default: return <Upload className="h-4 w-4" />;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-card max-w-2xl border-vintage-border max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-center text-primary">
            📚 Upload Resource
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* File Upload */}
          <div className="space-y-2">
            <Label htmlFor="file" className="text-sm font-medium">
              Resource File (PDF, DOC, DOCX)
            </Label>
            <div className="border-2 border-dashed border-vintage-border rounded-lg p-6 text-center hover:border-primary transition-colors">
              <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Click to upload or drag and drop your file here
                </p>
                <p className="text-xs text-muted-foreground">
                  Supported formats: PDF, DOC, DOCX (Max: 50MB)
                </p>
                <input
                  id="file"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                  required
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => document.getElementById('file')?.click()}
                  className="border-vintage-border"
                >
                  Choose File
                </Button>
              </div>
              {formData.file && (
                <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm font-medium">{formData.file.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {(formData.file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title" className="text-sm font-medium">
              Resource Title
            </Label>
            <Input
              id="title"
              type="text"
              placeholder="Enter a descriptive title for your resource"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              className="bg-card border-vintage-border focus:border-primary"
              required
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium">
              Description
            </Label>
            <Textarea
              id="description"
              placeholder="Provide a detailed description of your resource, what it covers, and who it's for..."
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className="bg-card border-vintage-border focus:border-primary min-h-[100px]"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Category */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">Category</Label>
              <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                <SelectTrigger className="bg-card border-vintage-border">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mathematics">Mathematics</SelectItem>
                  <SelectItem value="physics">Physics</SelectItem>
                  <SelectItem value="chemistry">Chemistry</SelectItem>
                  <SelectItem value="biology">Biology</SelectItem>
                  <SelectItem value="computer-science">Computer Science</SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="literature">Literature</SelectItem>
                  <SelectItem value="history">History</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Type */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">Resource Type</Label>
              <Select value={formData.type} onValueChange={(value) => setFormData(prev => ({ ...prev, type: value }))}>
                <SelectTrigger className="bg-card border-vintage-border">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ebook">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      E-book
                    </div>
                  </SelectItem>
                  <SelectItem value="notes">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Study Notes
                    </div>
                  </SelectItem>
                  <SelectItem value="mock-test">
                    <div className="flex items-center gap-2">
                      <TestTube className="h-4 w-4" />
                      Mock Test
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Price */}
          <div className="space-y-2">
            <Label htmlFor="price" className="text-sm font-medium">
              Price (USD)
            </Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="price"
                type="number"
                step="0.01"
                min="0"
                placeholder="0.00"
                value={formData.price}
                onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                className="pl-10 bg-card border-vintage-border focus:border-primary"
                required
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Set to 0 for free resources. Minimum paid price is $1.00
            </p>
          </div>

          {/* Preview Card */}
          {(formData.title || formData.type || formData.price) && (
            <div className="glass-card p-4 border-vintage-border">
              <h4 className="font-medium text-primary mb-2">Preview</h4>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  {getTypeIcon(formData.type)}
                </div>
                <div className="flex-1">
                  <h5 className="font-medium text-sm">
                    {formData.title || "Resource Title"}
                  </h5>
                  <p className="text-xs text-muted-foreground capitalize">
                    {formData.type || "Type"} • {formData.category || "Category"}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-secondary">
                    ${formData.price || "0.00"}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Submit Buttons */}
          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-vintage-border"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 btn-vintage text-primary-foreground"
            >
              <Upload className="h-4 w-4 mr-2" />
              Upload Resource
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};