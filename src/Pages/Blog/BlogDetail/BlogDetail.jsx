import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, Typography, Card, CardContent, Box } from '@mui/material';
import sampleBlogs from '../sampleBlogs';
import Layout from '../../../components/Layout/Layout';

function BlogDetail() {
    const { id } = useParams();
    const blog = sampleBlogs.find(b => b.id === parseInt(id));

    const currentBlogIndex = sampleBlogs.findIndex(b => b.id === parseInt(id));
    const prevBlog = sampleBlogs[currentBlogIndex - 1];
    const nextBlog = sampleBlogs[currentBlogIndex + 1];

    if (!blog) {
      return <Typography variant="h6">Blog bulunamadı.</Typography>;
    }

    return (
      <Layout>
        <Button component={Link} to="/blog" variant="contained" color="primary" style={{ marginBottom: '20px' }}>
          Geri Dön
        </Button>
        <Card>
          <CardContent>
            <Typography variant="h3" gutterBottom>
              {blog.title}
            </Typography>
            <Typography variant="h5">
              {blog.content}
            </Typography>
          </CardContent>
        </Card>

        <Box 
            sx={{ 
                position: 'fixed', 
                bottom: 0, 
                right: 0, 
                backgroundColor: '#f7f7f9', 
                borderTop: '1px solid #e0e0e0', 
                width: '100%', 
                display: 'flex', 
                justifyContent: 'flex-end', 
                padding: '10px' 
            }}
        >
            {prevBlog && <Button component={Link} to={`/blog/${prevBlog.id}`} variant="contained" color="secondary" style={{ marginRight: '10px' }}>
                Önceki Yazı
            </Button>}
            {nextBlog && <Button component={Link} to={`/blog/${nextBlog.id}`} variant="contained" color="primary">
                Sonraki Yazı
            </Button>}
        </Box>
      </Layout>
    );
}

export default BlogDetail;
