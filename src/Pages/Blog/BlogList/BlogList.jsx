import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import Layout from '../../../components/Layout/Layout';
import sampleBlogs from '../sampleBlogs';

function BlogList() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = sampleBlogs.filter(
    (blog) => 
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <TextField
        fullWidth
        variant="outlined"
        margin="normal"
        label="Blog başlığı veya anahtar kelime ara..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredBlogs.map(blog => (
        <Card key={blog.id} style={{ margin: '20px 0' }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {blog.title}
            </Typography>
            <Typography color="textSecondary" paragraph>
              {blog.description}
            </Typography>
            <Button component={Link} to={`/blog/${blog.id}`} variant="contained" color="primary">
              Oku
            </Button>
          </CardContent>
        </Card>
      ))}
    </Layout>
  );
}

export default BlogList;
