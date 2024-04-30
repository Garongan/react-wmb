import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import PropTypes from "prop-types";

const PaginationComponent = ({ paginationResponse, setPage }) => {
    const { page, totalPages, hasNext, hasPrevious } = paginationResponse;
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handlePrevious = () => {
        hasPrevious && setPage((prev) => prev - 1);
        scrollToTop();
    };

    const handleChangePage = (page) => {
        setPage(page);
        scrollToTop();
    };

    const handleNext = () => {
        hasNext && setPage((prev) => prev + 1);
        scrollToTop();
    };

    const renderPaginationItems = () => {
        const paginationItems = [];

        for (let i = 1; i <= totalPages; i++) {
            if (
                i === 1 ||
                i === totalPages ||
                (i >= page - 1 && i <= page + 1)
            ) {
                paginationItems.push(
                    <PaginationItem key={i}>
                        <PaginationLink
                            onClick={() => handleChangePage(i)}
                            isActive={i === page}
                        >
                            {i}
                        </PaginationLink>
                    </PaginationItem>
                );
            } else if (i === page - 2 || i === page + 2) {
                paginationItems.push(
                    <PaginationItem key={i}>
                        <PaginationEllipsis />
                    </PaginationItem>
                );
            }
        }

        return paginationItems;
    };

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        onClick={handlePrevious}
                        className="cursor-pointer"
                    />
                </PaginationItem>
                {renderPaginationItems()}
                <PaginationItem>
                    <PaginationNext
                        onClick={handleNext}
                        className="cursor-pointer"
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

PaginationComponent.propTypes = {
    paginationResponse: PropTypes.object,
    setPage: PropTypes.func,
};

export default PaginationComponent;
