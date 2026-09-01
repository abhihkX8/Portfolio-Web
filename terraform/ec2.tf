resource "aws_security_group" "portfolio" {
  name        = "portfolio-sg"
  description = "Allow HTTP/HTTPS and scoped SSH to the portfolio host"

  ingress {
    description = "SSH"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = [var.allowed_ssh_cidr]
  }

  ingress {
    description = "HTTP"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "HTTPS"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "portfolio-sg"
  }
}

data "aws_ami" "amazon_linux" {
  most_recent = true
  owners      = ["amazon"]

  filter {
    name   = "name"
    values = ["al2023-ami-*-x86_64"]
  }
}

resource "aws_instance" "portfolio" {
  ami                    = data.aws_ami.amazon_linux.id
  instance_type          = var.instance_type
  key_name               = var.key_name
  vpc_security_group_ids = [aws_security_group.portfolio.id]

  # Installs Docker and runs the portfolio container on boot.
  # TODO: replace the placeholder image with your real published image.
  user_data = <<-EOF
    #!/bin/bash
    dnf install -y docker
    systemctl enable --now docker
    docker run -d --restart unless-stopped \
      -p 80:3000 \
      your-registry/portfolio:latest
  EOF

  tags = {
    Name = "portfolio-host"
  }
}

output "public_ip" {
  description = "Public IP of the portfolio EC2 instance"
  value       = aws_instance.portfolio.public_ip
}
