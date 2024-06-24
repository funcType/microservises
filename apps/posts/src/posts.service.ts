import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectId, Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';
@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) { }

  async create(createPostInput: CreatePostInput): Promise<Post> {
    const post = this.postsRepository.create(createPostInput);
    const savedPost = await this.postsRepository.save(post);
    console.log('Post created:', savedPost);
    return savedPost;
  }

  async findAll(): Promise<Post[]> {
    const posts = await this.postsRepository.find();
    console.log('All posts:', posts);
    return posts;
  }

  async findOne(id: string): Promise<Post> {
    const post = await this.postsRepository.findOneBy({ id: new ObjectId(id) });
    console.log('Post found:', post);
    return post;
  }

  async forAuthor(authorId: string): Promise<Post[]> {
    const posts = await this.postsRepository.find({ where: { authorId } });
    console.log('Posts for author:', posts);
    return posts;
  }
}

