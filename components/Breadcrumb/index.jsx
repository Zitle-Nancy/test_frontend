import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react"

const BreadcrumbComponent = (props) => {
  const { categories } = props;

  return (
    <Breadcrumb>
    {categories.map(category => {
      return (
        <BreadcrumbItem>
          <BreadcrumbLink href="#">{category}</BreadcrumbLink>
        </BreadcrumbItem>
      )
    })}
    </Breadcrumb>
  )
};

export default BreadcrumbComponent;